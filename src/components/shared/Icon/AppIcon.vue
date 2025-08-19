<script setup lang="ts">
  import { onMounted, ref, watch, nextTick } from 'vue'

  import { ENDPOINTS } from '@/api/endpoints'

  interface IconProperties {
    baseUrl?: string
    name?: string
    raw?: string
    width?: number | string
    height?: number | string
    viewBox?: string
    stroke?: string
    strokeWidth?: number | string
    rotate?: number
    fillOpacity?: number
  }

  const properties = withDefaults(defineProps<IconProperties>(), {
    baseUrl: ENDPOINTS.svg || 'http://localhost:31299/api/v1/svg',
    name: '',
    raw: '',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 2,
    rotate: 0,
    fillOpacity: 0
  })

  const svgReference = ref<SVGSVGElement | null>()

  const isDataObject = (value: unknown): value is { data: string } => {
    return (
      value !== null &&
      typeof value === 'object' &&
      'data' in value &&
      typeof (value as { data: unknown }).data === 'string'
    )
  }

  const clearSvgRoot = (): void => {
    while (svgReference.value?.firstChild) {
      svgReference.value.firstChild.remove()
    }
  }

  const insertInnerSvg = (raw: string): void => {
    if (!svgReference.value) {
      console.warn('SVG reference is not available')
      return
    }

    const parser = new DOMParser()
    const documentParsed = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${raw}</svg>`,
      'image/svg+xml'
    )

    clearSvgRoot()

    for (const child of documentParsed.documentElement.childNodes) {
      svgReference.value.append(child.cloneNode(true))
    }
  }

  const buildUrl = (): string => {
    if (!properties.baseUrl) {
      console.error('baseUrl is not defined')
      return ''
    }
    const hasName = typeof properties.name === 'string' && properties.name.length > 0
    return hasName
      ? `${properties.baseUrl}?name=${encodeURIComponent(properties.name)}`
      : properties.baseUrl
  }

  const fetchAndInsert = async (): Promise<void> => {
    if (!svgReference.value) {
      console.warn('SVG reference is not available yet.')
      return
    }
    const url = buildUrl()
    if (!url) {
      console.error('No valid URL to fetch SVG')
      return
    }

    try {
      const response = await fetch(url)
      const contentType = response.headers.get('content-type') ?? ''
      if (contentType.includes('application/json')) {
        const json = await response.json()
        if (typeof json === 'string') insertInnerSvg(json)
        else if (isDataObject(json)) insertInnerSvg(json.data)
      } else {
        insertInnerSvg(await response.text())
      }
    } catch (error) {
      console.error('Не удалось загрузить SVG:', error)
    }
  }

  onMounted(async () => {
    await nextTick()
    if (!svgReference.value) {
      console.error('SVG element not found in DOM')
      return
    }
    if (properties.raw && properties.raw.length > 0) {
      insertInnerSvg(properties.raw)
      return
    }
    await fetchAndInsert()
  })

  watch(
    () => properties.raw,
    async next => {
      await nextTick()
      if (next && next.length > 0) {
        insertInnerSvg(next)
      } else {
        await fetchAndInsert()
      }
    }
  )

  watch(
    () => properties.name,
    async () => {
      await nextTick()
      if (!properties.raw || properties.raw.length === 0) {
        await fetchAndInsert()
      }
    }
  )
</script>

<template>
  <svg
    ref="svgReference"
    class="app-icon"
    :width="properties.width"
    :height="properties.height"
    :viewBox="properties.viewBox"
    :stroke="properties.stroke"
    :stroke-width="properties.strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :fill-opacity="properties.fillOpacity / 100"
    :style="{ transform: `rotate(${properties.rotate}deg)` }"
  />
</template>

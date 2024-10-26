import { useEffect } from "react"
import { useRef } from "react"
import { Graph } from '@antv/x6'

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
}

function App() {
  const elRef = useRef(null)

  useEffect(() => {
    const graph = new Graph({
      container: elRef.current,
      autoResize: true,
      panning: true,
      mousewheel: true,
      scaling: {
        min: 0.4,
        max: 8,
      },
      grid: {
        type: "fixedDot",
        visible: true,
      },
    })
    graph.fromJSON(data)

    return () => {
      graph.dispose()
    }
  }, [])

  return <div className='w-full h-560px' ref={elRef}></div>
}

export default App

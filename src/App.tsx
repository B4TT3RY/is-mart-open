import { useState } from 'react'

import MartButton from './components/MartButton'
import VisitedMart from './components/VisitedMart'
import Header from './components/Header'

function App() {
  return (
    <div className="App bg-gray-100 h-screen">
      <div className="flex">
        <MartButton type="emart" title="이마트" />
        <MartButton type="traders" title="트레이더스" subTitle="이마트" />
        <MartButton type="homeplus" title="홈플러스" />
        <MartButton type="costco" title="코스트코" />
        <MartButton type="emart-everyday" title="에브리데이" subTitle="이마트" />
      </div>

      <VisitedMart type="traders" name="스타필드 안성점" status="영업중"/>
      <Header />
    </div>
  )
}

export default App

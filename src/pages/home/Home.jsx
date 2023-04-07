import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Category from './Category'
import Trandy from './Trandy'
import ShowUp from './ShowUp'
import FeedBack from './FeedBack'
import Follow from './Follow'
import ProdectList from './ProdectList'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <ProdectList/>
        <Trandy/>
        <ShowUp/>
        <FeedBack/>
        <Follow/>
    </div>
  )
}

export default Home
import { useState } from 'react';
import orderimg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


export default function Order() {
    const categories = ['salad', 'pizzas', 'soup', 'dessert', 'drink']
    const { category } = useParams();
    const initialindex = categories.indexOf(category)
    const [tabindex, settabindex] = useState(initialindex)
    const [menu] = useMenu();

    console.log(category)
    const dessert = menu.filter(item => item.category == 'dessert')
    const pizza = menu.filter(item => item.category == 'pizza')
    const salad = menu.filter(item => item.category == 'salad')
    const soup = menu.filter(item => item.category == 'soup')
    const drinks = menu.filter(item => item.category == 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderimg} title={'order food'}></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => settabindex(index)}>
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}
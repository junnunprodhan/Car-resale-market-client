import React from 'react';
import Card from '../Card/Card';

const AdviserItems = () => {
    const productInfo=[
        {
            picture:'https://wieck-nissanao-production.s3.amazonaws.com/photos/0f4a7a995d2d26a47fbff6afd1ff9d2f0940e067/preview-768x432.jpg', 
            name :'Nissan Caravan',
            category:'Microbus', 
            location:'Dhaka', 
            resalePrice:'42000', 
            originalPrice:'150000',
            useTime:'2', 
            postedTime:'11/10/2022', 
            userInfo:{
                userId:'3',
                displayName:'Jamil khan',
                email:'Jamil@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
        {
            picture:'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_middle_east/vehicles/nv350/product_code/product_version/overview/X81C_URVAN-W_Tigereye-2014.jpg.ximg.l_6_m.smart.jpg', 
            name :'Nissan Urban',
            category:'Microbus', 
            location:'Dhaka', 
            resalePrice:'40000', 
            originalPrice:'550000',
            useTime:'1', 
            postedTime:'05/10/2022', 
            userInfo:{
                userId:'3',
                displayName:'Akram',
                email:'akram@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
        {
            picture:'https://images.hgmsites.net/hug/2011-acura-tl-4-door-sedan-2wd-tech-angular-front-exterior-view_100326885_h.jpg', 
            name :'Acura Jtx300',
            category:'Acura', 
            location:'jamalpur', 
            resalePrice:'82000', 
            originalPrice:'180000',
            useTime:'5', 
            postedTime:'6/10/2022', 
            userInfo:{
                userId:'3',
                displayName:'Akash',
                email:'akash@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
        {
            picture:'https://imgd-ct.aeplcdn.com/1056x660/n/bpeedua_1542755.jpg?q=75', 
            name :'Aura Mahindro',
            category:'Acura', 
            location:'Dhaka', 
            resalePrice:'42000', 
            originalPrice:'150000',
            useTime:'2', 
            postedTime:'11/10/2022', 
            userInfo:{
                userId:'3',
                displayName:'Sufian',
                email:'sufian@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
        {
            picture:'https://di-uploads-pod20.dealerinspire.com/sewickleybmw/uploads/2022/06/sew-bmw_2023-x1_lineup.jpg', 
            name :'BMW LT6',
            category:'BMW', 
            location:'Dhaka', 
            resalePrice:'42000', 
            originalPrice:'150000',
            useTime:'2', 
            postedTime:'11/10/2022', 
            userInfo:{
                userId:'3',
                displayName:'Abbas',
                email:'Abbas@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
        {
            picture:'https://static.tcimg.net/vehicles/primary/0e6ca966b5ffb579/2023-BMW-2_Series-white-full_color-driver_side_front_quarter.png', 
            name :'BMW 125',
            category:'BMW', 
            location:'Dhaka', 
            resalePrice:'32000', 
            originalPrice:'150000',
            useTime:'2', 
            postedTime:'11/09/2022', 
            userInfo:{
                userId:'3',
                displayName:'korim islam ',
                email:'korim@gamil.com',
                photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
                Status:'Verified',
                role:'seller'
            } 
            
        },
    ]
    return (
        <div className='mt-10'>
            <h1 className='text-5xl text-center mb-5 text-red-700'>Advertise Items</h1>
            <div  className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {productInfo.map((product,i)=><Card product={product} key={i}></Card>)}
        </div>
        </div>
    );
};

export default AdviserItems;
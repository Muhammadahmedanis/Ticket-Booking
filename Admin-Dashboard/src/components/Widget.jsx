import React from 'react'
import { DollarOutlined, FileTextOutlined, ShoppingCartOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';

function Widget({type}) {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <UserOutlined className='icon text-[18px] p-2 rounded' style={{color: 'crimson', background: "rgba(255, 0, 0, 0.2)"}} />    
                )
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlined className='icon text-[18px] p-2 rounded' style={{color: 'goldenrod', background: "rgba(218, 165, 32, 0.2)"}}/>
                )
            }
            break;
            case "earning":
                data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <DollarOutlined className='icon text-[18px] p-2 rounded' style={{color: 'green', background: "rgba(0, 128, 0, 0.2)"}}/>
                    )
                }
                break;
                case "balance":
                data = {
                    title: "BALANCE",
                    isMoney: true,
                    link: "See details",
                    icon: (
                        <FileTextOutlined className='icon text-[18px] p-2 rounded' style={{color: 'purple', background: "rgba(128, 0, 128, 0.2)"}}/>    
                    )
                }
                break;
        default:
            break;
    }

  return (
    <div className='flex flex-wrap flex-1 justify-between px-5 rounded shadow-custom dark:border-white dark:border py-2 min-h-40 dark:text-[rgb(156,156,156)]'>
        <div className='flex flex-col w-max justify-evenly'>
            <span className='font-semibold text-[18px] text-gray-500'>{data?.title}</span>
            <span className='font-medium text-[26px]'>{data?.isMoney && "$"}23123</span>
            <span className='text-[15px]'>{data?.link}</span>
        </div>
        <div className='flex flex-col justify-between py-2 items-end'>
            <div className='text-green-700 text-[15px]'>
            <UpOutlined />
                20%
            </div>
            <div>
                {data?.icon}
            </div>
        </div>
    </div>
  )
}

export default Widget
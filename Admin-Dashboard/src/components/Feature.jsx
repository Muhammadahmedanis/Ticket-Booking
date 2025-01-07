import { ArrowDownOutlined, ArrowUpOutlined, MoreOutlined } from '@ant-design/icons'; 
import { Progress } from 'antd';
const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
};

function Feature() {
  return (
    <div className='shadow-custom p-4 w-auto'>
        <div className='flex justify-between items-center text-gray-500'>
            <h1 className='font-bold text-[16px]'>Total Revenue</h1>
            <MoreOutlined style={{fontSize: '22px'}}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='py-4'>
                <Progress
                type="dashboard"
                strokeColor="#1677FF"
                steps={10}
                percent={70}
                trailColor="rgba(0, 0, 0, 0.06)"
                strokeWidth={10}
                format={(percent) => (
                    <span style={{ color: "#1677FF", fontWeight: "bold" }}>
                      {percent}%
                    </span>
                  )}
                />
          </div>
          <div className='w-64 text-gray-500 text-center'>
            <p className='text-xl'>Total sales made today</p>
            <p className='text-2xl font-semibold py-3'>$420</p>
            <p className='text-[15px]'>Previous transaction processing. Last payment may not be included</p>
          </div>

          <div className='flex flex-wrap justify-between w-full py-3'>

            <div className='text-gray-500 text-center'>
                <p className='text-[17px] font-semibold'>Target</p>
                <div className='flex gap-1'>
                    <ArrowDownOutlined className='text-red-600 text-[16px] font-bold' />
                    <p className='text-[18px] font-semibold'>$412</p>
                </div>
            </div>
            <div className='text-gray-500 text-center'>
                <p className='text-[17px] font-semibold'>Last week</p>
                <div className='flex gap-1'>
                    <ArrowUpOutlined className='text-green-500 text-[16px] font-bold'/>
                    <p className='text-[18px] font-semibold'>$412</p>
                </div>
            </div>
            <div className='text-gray-500 text-center'>
                <p className='text-[17px] font-semibold'>Last month</p>
                <div className='flex gap-1'>
                    <ArrowUpOutlined className='text-green-500 text-[16px] font-bold'/>
                    <p className='text-[18px] font-semibold'>$412</p>
                </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Feature
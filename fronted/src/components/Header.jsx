import React from 'react';
import { Calendar, Button, Dropdown } from 'antd';

const calendarDropdown = {
    menu: {
      items: [
        {
          key: 'calendar',
          label: (
            <div className="p-2">
              <Calendar fullscreen={false} />
            </div>
          ),
        },
      ],
    },
  };
const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem('access');
        window.location.href = './login';
    };

    return (
        <div className='bg-[#415f7e] w-full px-6  items-center h-12 p-3 border-b bordered-box flex flex-row justify-between border-b-[#9fadbc29]'>
            <div className="left justify-center items-center flex">
                <h3 className='text-slate-50'>Task Pilot</h3>
            </div>
             <Dropdown
          menu={calendarDropdown.menu}
          placement="bottom"
          trigger={['click']}
        >
          <Button>Calendar</Button>
        </Dropdown>
            <div className="right flex items-center space-x-4">
                <button onClick={handleLogout}className='text-white '>Logout</button>
                <img className='rounded-full h-10 width-auto' src="https://e7.pngegg.com/pngimages/215/344/png-clipart-computer-icons-task-management-action-item-compliance-icon-angle-text.png" alt="" />
            </div>
        </div>
    );
}

export default Header;
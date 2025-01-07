import { Input } from 'antd';
import { AudioOutlined, BellOutlined, CaretDownOutlined, InboxOutlined, LogoutOutlined, MoonOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';  
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { Avatar, Space } from 'antd';


// const { Search } = Input;
// <AudioOutlined
//   style={{
//     fontSize: 16,
//     color: '#1677ff',
//   }}
// />

// const onSearch = (value ) => console.log(value);

function Navbar() {
  return (
    <div className='flex gap-3'>

      {/* <div className='absolute right-7 gap-5 md:flex hidden'>
        <div>
        <UserOutlined style={{fontSize: "22px"}} />
        </div>
        <div>
        <SettingOutlined style={{fontSize: "22px"}} />
        </div>
        <div>
        <BellOutlined style={{fontSize: "22px"}} />
        </div>
        <div>
        <MoonOutlined style={{fontSize: "22px"}} />
        </div>
      </div> */}
        
      <div className="absolute right-7 gap-5">
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex items-center w-max justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold leading-5 text-white  hover:text-white border-none outline-none">
          <Avatar
            style={{
              height: "45px",
              width: "45px",
              fontSize: "22px",
              backgroundColor: '#fde3cf',
              color: '#f56a00',
            }}>
            U
          </Avatar>
              
            </MenuButton>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <MenuItems
                modal={false}
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900"
              >
                <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="space-y-1 p-2.5">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
                          <BellOutlined style={{fontSize: "20px"}} />
                          <span className="grow">Notification</span>
                        </a>
                      )}
                    </MenuItem>
                  </div>
                  <div className="space-y-1 p-2.5">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
                          <UserOutlined style={{fontSize: "20px"}} />
                          <span className="grow">Account</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
                          <SettingOutlined style={{fontSize: "20px"}} />
                          <span className="grow">Settings</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
                          <MoonOutlined style={{fontSize: "22px", color: "gray"}} />
                          <span className="grow">Theme</span>
                        </a>
                      )}
                    </MenuItem>
                  </div>
                  <div className="space-y-1 p-2.5">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
                          <LogoutOutlined style={{fontSize: "20px"}} />
                          <span className="grow">Sign out</span>
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>

    </div>
  )
}

export default Navbar;  
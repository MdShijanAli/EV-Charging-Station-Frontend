<template>
  <div class="relative lg:flex hidden">
    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link p-2">
        <span class="sr-only">View notifications</span>
        <span class="flex items-center justify-center">
            <i class="ri-notification-3-line text-2xl"></i>
            <span class="absolute top-5 end-2.5 w-2 h-2 rounded-full bg-danger"></span>
        </span>
    </button>
    <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">

        <div class="p-3 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
                <h6 class="text-sm text-gray-500 dark:text-gray-200"> Notification</h6>
                <a href="javascript: void(0);" class="text-gray-500 dark:text-gray-200 underline">
                    <small>Clear All</small>
                </a>
            </div>
        </div>

        <div class="py-4 h-80" data-simplebar>

            <h5 class="text-xs text-gray-500 dark:text-gray-200 px-4 mb-2">Today</h5>

            <a href="javascript:void(0);" class="block mb-4">
                <div class="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                <i class="ri-message-3-line text-lg"></i>
                            </div>
                        </div>
                        <div class="flex-grow truncate ms-2">
                            <h5 class="text-sm font-semibold mb-1">Datacorp <small class="font-normal ms-1">1 min ago</small></h5>
                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                        </div>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0);" class="block mb-4">
                <div class="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white">
                                <i class="ri-user-add-line text-lg"></i>
                            </div>
                        </div>
                        <div class="flex-grow truncate ms-2">
                            <h5 class="text-sm font-semibold mb-1">Admin <small class="font-normal ms-1">1 hr ago</small></h5>
                            <small class="noti-item-subtitle text-muted">New user registered</small>
                        </div>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0);" class="block mb-4">
                <div class="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img src="/assets/images/users/avatar-2.jpg" class="rounded-full h-9 w-9" alt="">
                        </div>
                        <div class="flex-grow truncate ms-2">
                            <h5 class="text-sm font-semibold mb-1">Cristina Pride <small class="font-normal ms-1">1 day ago</small></h5>
                            <small class="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                        </div>
                    </div>
                </div>
            </a>

            <h5 class="text-xs text-gray-500 dark:text-gray-200 px-4 mb-2">Yesterday</h5>

            <a href="javascript:void(0);" class="block mb-4">
                <div class="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white">
                                <i class="ri-discuss-line text-lg"></i>
                            </div>
                        </div>
                        <div class="flex-grow truncate ms-2">
                            <h5 class="text-sm font-semibold mb-1">Datacorp</h5>
                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                        </div>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0);" class="block">
                <div class="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img src="/assets/images/users/avatar-4.jpg" class="rounded-full h-9 w-9" alt="">
                        </div>
                        <div class="flex-grow truncate ms-2">
                            <h5 class="text-sm font-semibold mb-1">Karen Robinson</h5>
                            <small class="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <a href="javascript:void(0);" class="p-2 border-t border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
            View All
        </a>
    </div>
</div>
</template>
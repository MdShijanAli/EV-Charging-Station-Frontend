<template>
<div class="relative hidden lg:block">

<form data-fc-type="dropdown" type="button">
    <input type="search" class="form-input bg-black/5 border-none ps-8 relative" placeholder="Search...">
    <span class="ri-search-line text-base z-10 absolute start-2 top-1/2 -translate-y-1/2"></span>
</form>

<div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 mt-3.5 transition-all duration-300 bg-white shadow-lg border rounded-lg py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">

    <!-- item-->
    <h5 class="flex items-center py-2 px-3 text-sm text-gray-800 dark:text-gray-400 uppercase">Found <b class="text-decoration-underline">08</b> results</h5>

    <!-- item-->
    <a href="javascript:void(0);" class="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <i class="ri-file-chart-line text-base me-1"></i>
        <span>Analytics Report</span>
    </a>

    <!-- item-->
    <a href="javascript:void(0);" class="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <i class="ri-lifebuoy-line text-base me-1"></i>
        <span>How can I help you?</span>
    </a>

    <!-- item-->
    <a href="javascript:void(0);" class="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <i class="ri-user-settings-line text-base me-1"></i>
        <span>User profile settings</span>
    </a>

    <!-- item-->
    <h6 class="flex items-center py-2 px-3 text-sm text-gray-800 dark:text-gray-400 uppercase">Users</h6>

    <!-- item-->
    <a href="javascript:void(0);" class="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <img class="me-2 rounded-full h-8" src="/assets/images/users/avatar-2.jpg" alt="Generic placeholder image">
        <div class="flex-grow">
            <h5 class="m-0 fs-14">Erwin Brown</h5>
            <span class="fs-12 ">UI Designer</span>
        </div>
    </a>

    <!-- item-->
    <a href="javascript:void(0);" class="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <img class="me-2 rounded-full h-8" src="/assets/images/users/avatar-5.jpg" alt="Generic placeholder image">
        <div class="flex-grow">
            <h5 class="m-0 fs-14">Jacob Deo</h5>
            <span class="fs-12 ">Developer</span>
        </div>
    </a>
</div>
</div>
</template>
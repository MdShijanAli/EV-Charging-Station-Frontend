<template>
<!-- Language Dropdown Button -->
<div class="relative ms-auto">
    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link p-2 fc-dropdown">
        <span class="flex items-center gap-2">
            <img src="/assets/images/flags/us.jpg" alt="flag-image" class="h-3">
            <div class="lg:block hidden">
                <span>English</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
        </span>
    </button>


    <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-2">
        <!-- item-->
        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <img src="/assets/images/flags/germany.jpg" alt="user-image" class="h-4">
            <span class="align-middle">German</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <img src="/assets/images/flags/italy.jpg" alt="user-image" class="h-4">
            <span class="align-middle">Italian</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <img src="/assets/images/flags/spain.jpg" alt="user-image" class="h-4">
            <span class="align-middle">Spanish</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <img src="/assets/images/flags/russia.jpg" alt="user-image" class="h-4">
            <span class="align-middle">Russian</span>
        </a>
    </div>
</div>
</template>
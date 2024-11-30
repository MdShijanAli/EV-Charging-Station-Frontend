<template>
  <div class="relative">
    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link flex items-center gap-2.5 px-3 bg-black/5 border-x border-black/10">
        <img src="/assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-full h-8">
        <span class="md:flex flex-col gap-0.5 text-start hidden">
            <h5 class="text-sm">Tosha Minner</h5>
            <span class="text-xs">Founder</span>
        </span>
    </button>

    <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <!-- item-->
        <h6 class="flex items-center py-2 px-3 text-xs text-gray-800 dark:text-gray-400">Welcome !</h6>

        <!-- item-->
        <a href="pages-profile.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <i class="ri-account-circle-line text-lg align-middle"></i>
            <span>My Account</span>
        </a>

        <!-- item-->
        <a href="pages-profile.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <i class="ri-settings-4-line text-lg align-middle"></i>
            <span>Settings</span>
        </a>

        <!-- item-->
        <a href="pages-faqs.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <i class="ri-customer-service-2-line text-lg align-middle"></i>
            <span>Support</span>
        </a>

        <!-- item-->
        <a href="auth-lock-screen.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <i class="ri-lock-password-line text-lg align-middle"></i>
            <span>Lock Screen</span>
        </a>

        <!-- item-->
        <a href="auth-logout-2.html" class="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
            <i class="ri-logout-box-line text-lg align-middle"></i>
            <span>Logout</span>
        </a>
    </div>
</div>
</template>
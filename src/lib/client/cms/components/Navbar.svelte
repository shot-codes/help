<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav
  class="absolute w-full border-b z-10 bg-neutral-200 p-5 shadow dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-lg"
>
  <ul class="flex space-x-4">
    <li>
      <a href="/" class:font-bold={$page.url.pathname === "/"}>
        Planets
      </a>
    </li>
    <li>
      <a href="/admin" class:font-bold={$page.url.pathname === "/admin"}>
        Admin
      </a>
    </li>
  </ul>
</nav>

<style>
  .active {
    color: red;
  }
</style>
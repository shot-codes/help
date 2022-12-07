<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav

  class="flex flex-grow p-5 pointer-events-none"
>
  <div class="rounded-md shadow p-3 w-full bg-opacity-20 bg-neutral-900 backdrop-blur--lg">
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
  </div>
</nav>
<script lang="ts">
  import { Canvas } from "@threlte/core";
  import type { PageData } from "./$types";
  import Scene from "$planets/components/Scene.svelte";
  import Navbar from "$planets/components/Navbar.svelte";

  export let data: PageData;
</script>

<Navbar/>

<div class="absolute top-0 left-0 w-full h-full -z-10">
  <Canvas>
    <Scene system={data.root}/>
  </Canvas>
</div>

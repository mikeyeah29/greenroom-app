<template>
    <div id="app">
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">

    $color-main: #C2EFB3;
    $color-secondary: #004E64;
    $color-accent: #D90368;
    $color-light: #FDF5ED;
    $color-dark: #25171A;

    body {
        background: $color-main;
        color: $color-dark;
    }

    .container {
        width: 90%;
        max-width: 800px;
        margin: 0px auto;
    }

    .p-md {
        padding: 8px;
    }

    .bg-light {
        background: $color-light;
    }

</style>

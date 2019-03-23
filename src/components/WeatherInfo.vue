<template>
    <div>
        <h3>{{ cityName }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'WeatherInfo',
        props: ['cityName']
    }
</script>
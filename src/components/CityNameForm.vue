<template>
    <div>
        <label>City:&nbsp;
            <input type="text" data-test="cityName" v-model="cityName" />
        </label>
        <button data-test="submitButton" @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'CityNameForm',
    data() {
        return {
            cityName: ''
        };
    },
    methods: {
        submit() {
            // Emit 'submit' event:
            this.$emit('submit', this.cityName);
            // Clear city name field:
            this.cityName = '';
        } 
    }
}
</script>
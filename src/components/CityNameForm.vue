<template>
    <div>
        <b-row>
            <b-col md="2">
                <label for="cityName">City:</label>
            </b-col>
            <b-col md="10">
                <b-form-group>
                    <input type="text" class="form-control" data-test="cityName" v-model="cityName" id="cityName" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-button variant="primary" data-test="submitButton" @click="submit">Submit</b-button>
            </b-col>
        </b-row>
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
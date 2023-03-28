<template lang="">
    <div>
        <h2>Work</h2>
        {{aa}}
        {{data}}
    </div>
</template>

<script setup>
    const aa = useState('g');
</script>
  
<script>
// import { thisTypeAnnotation } from '@babel/types';
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getData'])
    },
    created(){
        this.getData()
    }   
}
</script>
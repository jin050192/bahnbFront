<template>
  <div class="ground">I am component</div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: 'Ground',
  // setup() {
  //   // 동적인 데이터 선언함.
  //   const state = reactive({
  //     data: []
  //   })

  //   // 이벤트 함수
  //   const add = () => {
  //     state.data.push('데이터 추가')
  //   }

  //   // api 이용하기
  //   axios.get('').then((res) => {
  //     console.log(res)
  //   })

  //   return ( state, add )
  // }
}
</script>

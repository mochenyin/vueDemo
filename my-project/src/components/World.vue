<template>
<button @click='number+=1'>{{number}}</button>
</template>
<script>
export default{
  name: 'world',
  data: () => {
    return {
      number: 0
    }
  }
}
</script>

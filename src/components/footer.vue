<template>
    <div class='footer'>
        <span>Written by {{author}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            author: 'Ethan'
        }
    }
}
</script>
<style lang="scss" scoped>
.footer {
  margin: 40px;
  text-align: center;
  color: #eee;
  font-size: 15px;
  text-shadow: 0 3px 0 2px #eee;
}
</style>

<template>
    <div id="footer">
        <span>Written by {{author}}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      author: "liudi"
    };
  }
};
</script>

<style scoped>
#footer {
  margin: 40px;
  text-align: center;
  color: #eee;
  font-size: 15px;
  text-shadow: 0 3px 0 2px #eee;
}
</style>
<template>
  <view class="container">
    <block>
      <slot></slot>
    </block>
  </view>
</template>
<script>
var that;
export default {
  data() {
    return {};
  },
  onLoad() {
    that = this;
  },
  onShow() {},
  components: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>

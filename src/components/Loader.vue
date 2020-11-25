<template>
  <div class="lds-dual-ring"></div>
</template>

<style>
.lds-dual-ring {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  align-self: center;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid rgb(68, 123, 185);
  border-color: rgb(68, 123, 185) transparent rgb(68, 123, 185) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
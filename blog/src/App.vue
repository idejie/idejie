<script setup>
import { ref } from 'vue';
import avatar from './assets/avatar.png';
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo">
        <img :src="avatar" alt="logo" />
      </div>
      <div class="nav-container">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="light"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="home">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="project">
            <router-link to="/projects">Projects</router-link>
          </a-menu-item>
          <a-menu-item key="publications">
            <router-link to="/publications">Publications</router-link>
          </a-menu-item>
          <a-menu-item key="posts">
            <router-link to="/posts">Posts</router-link>
          </a-menu-item>
          <a-menu-item key="more">
            <router-link to="/more">More</router-link>
          </a-menu-item>
        </a-menu>
        <a-button type="primary" class="login-button">
          Login
        </a-button>
      </div>
    </a-layout-header>
    <a-layout-content class="main-content">
      <div class="content-container">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Copyright © {{ new Date().getFullYear() }} Reserved <a href="https://github.com/idejie" class="footer-link">idejie</a>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #fff;
}

.logo {
  float: left;
  width: 44px;
  height: 44px;
  margin: 10px 24px 10px 0;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  background: transparent;
}

.main-content {
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex: 1;
  background: #fff;
  padding: 24px;
  margin: 0;
  min-height: calc(100vh - 64px - 70px - 32px);  /* 减去header、footer和breadcrumb的高度 */
}

.header {
  background: #fff !important;
  border-bottom: 1px solid #f0f0f0;
}

.nav-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-button {
  margin-left: 20px;
}

:deep(.ant-menu) {
  flex: 1;
  background: transparent;
  border-bottom: none;
}

:deep(.ant-menu-item) {
  color: rgba(0, 0, 0, 0.85) !important;
}

:deep(.ant-menu-item:hover) {
  color: #1890ff !important;
}

:deep(.ant-menu-item-selected) {
  color: #1890ff !important;
}

:deep(.ant-layout-header) {
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  display: flex;
  align-items: center;
  background: #fff !important;
}

:deep(.ant-layout-footer) {
  background: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

:deep(.ant-layout-content) {
  background: #fff;
}

.footer-link {
  color: #1890ff;
  text-decoration: none;
}

.footer-link:hover {
  color: #40a9ff;
}

.ant-input-search {
  margin-right: 20px;
}
</style>

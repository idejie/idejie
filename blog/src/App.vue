<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import avatar from './assets/avatar.png';
import { useAuthStore } from './stores/auth';
import { DownOutlined, MenuOutlined } from '@ant-design/icons-vue'; // Remove CustomerServiceOutlined import
import { message } from 'ant-design-vue';
import Chat from './views/Chat.vue'; // Corrected path for Chat.vue

const selectedKeys = ref(['home']); // 默认选中 Home
const authStore = useAuthStore(); // Use auth store
const router = useRouter();

const showDrawer = ref(false); // State for mobile drawer visibility

const onCloseDrawer = () => {
  showDrawer.value = false;
};

const navigateAndCloseDrawer = (path) => {
  router.push(path);
  onCloseDrawer();
};

// Login Modal State and Handlers
const showLoginModal = ref(false);
const loginLoading = ref(false);
const loginError = ref(null);

const loginFormState = reactive({
  username: '',
  password: '',
});

const showLogin = () => {
  showLoginModal.value = true;
  loginFormState.username = '';
  loginFormState.password = '';
  loginError.value = null;
};

const handleLoginModalOk = async () => {
  loginLoading.value = true;
  loginError.value = null;
  try {
    await authStore.login(loginFormState.username, loginFormState.password);
    message.success('Login successful!');
    showLoginModal.value = false;
    router.push('/');
  } catch (err) {
    loginError.value = err.message || 'Login failed.';
    message.error(loginError.value);
  } finally {
    loginLoading.value = false;
  }
};

const handleLoginModalCancel = () => {
  showLoginModal.value = false;
};

// Register Modal State and Handlers
const showRegisterModal = ref(false);
const registerLoading = ref(false);
const registerError = ref(null);

const registerFormState = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const showRegister = () => {
  showRegisterModal.value = true;
  registerFormState.username = '';
  registerFormState.email = '';
  registerFormState.password = '';
  registerFormState.confirmPassword = '';
  registerError.value = null;
};

const validateConfirmPassword = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('Please confirm your password!');
  }
  if (value !== registerFormState.password) {
    return Promise.reject('The two passwords that you entered do not match!');
  }
  return Promise.resolve();
};

const handleRegisterModalOk = async () => {
  registerLoading.value = true;
  registerError.value = null;
  try {
    await authStore.register(registerFormState.username, registerFormState.email, registerFormState.password);
    message.success('Registration successful! You can now log in.');
    showRegisterModal.value = false;
    showLogin(); // Optionally show login modal after successful registration
  } catch (err) {
    registerError.value = err.message || 'Registration failed.';
    message.error(registerError.value);
  } finally {
    registerLoading.value = false;
  }
};

const handleRegisterModalCancel = () => {
  showRegisterModal.value = false;
};

const handleLogout = () => {
  authStore.logout();
  router.push('/login'); // Redirect to login page after logout (or home if no login page)
};

const isChatModalVisible = ref(false);

const showChatModal = () => {
  isChatModalVisible.value = true;
};

const handleChatModalCancel = () => {
  isChatModalVisible.value = false;
};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo" @click="router.push('/')" style="cursor: pointer;">
        <img :src="avatar" alt="logo" />
      </div>
      <div class="nav-container">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="light"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          class="main-menu"
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
          <a-menu-item key="write" v-if="authStore.user"> <!-- New: Write Post link -->
            <router-link to="/write">Write</router-link>
          </a-menu-item>
          <a-menu-item key="chat" v-if="authStore.user"> <!-- New: Chat link -->
            <router-link to="/chat">Chat</router-link>
          </a-menu-item>
        </a-menu>
        <!-- Commenting out auth-section to hide login/logout buttons -->
        <!-- <div class="auth-section desktop-auth-section">
          <a-button v-if="!authStore.user" type="primary" @click="showLogin">
            Login
          </a-button>
          <a-dropdown v-else>
            <a class="ant-dropdown-link" @click.prevent>
              Welcome, {{ authStore.user.username }}
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="logout" @click="handleLogout">
                  Logout
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div> -->
        <MenuOutlined class="menu-icon" @click="showDrawer = true" />
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

    <!-- Login Modal -->
    <a-modal
      v-model:open="showLoginModal"
      title="Login"
      @ok="handleLoginModalOk"
      @cancel="handleLoginModalCancel"
      :confirmLoading="loginLoading"
    >
      <a-form :model="loginFormState" layout="vertical" @submit.prevent>
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="loginFormState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="loginFormState.password" />
        </a-form-item>
      </a-form>
      <a-alert v-if="loginError" :message="loginError" type="error" show-icon style="margin-top: 16px;" />
      <div style="margin-top: 16px; text-align: center;">
        Don't have an account? <a @click="showLoginModal = false; showRegister()">Register</a>
      </div>
    </a-modal>

    <!-- Register Modal -->
    <a-modal
      v-model:open="showRegisterModal"
      title="Register"
      @ok="handleRegisterModalOk"
      @cancel="handleRegisterModalCancel"
      :confirmLoading="registerLoading"
    >
      <a-form :model="registerFormState" layout="vertical" @submit.prevent>
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="registerFormState.username" />
        </a-form-item>

        <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' }
          ]"
        >
          <a-input v-model:value="registerFormState.email" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!', min: 6 }]"
        >
          <a-input-password v-model:value="registerFormState.password" />
        </a-form-item>

        <a-form-item
          label="Confirm Password"
          name="confirmPassword"
          :rules="[
            { required: true, message: 'Please confirm your password!' },
            {
              validator: validateConfirmPassword,
              trigger: 'blur',
            },
          ]"
        >
          <a-input-password v-model:value="registerFormState.confirmPassword" />
        </a-form-item>
      </a-form>
      <a-alert v-if="registerError" :message="registerError" type="error" show-icon style="margin-top: 16px;" />
      <div style="margin-top: 16px; text-align: center;">
        Already have an account? <a @click="showRegisterModal = false; showLogin()">Login</a>
      </div>
    </a-modal>

    <!-- Mobile Drawer -->
    <a-drawer
      title="Navigation"
      placement="right"
      :closable="false"
      :open="showDrawer"
      @close="onCloseDrawer"
    >
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="vertical"
        :style="{ borderRight: 'none' }"
      >
        <a-menu-item key="home" @click="navigateAndCloseDrawer('/')">
          Home
        </a-menu-item>
        <a-menu-item key="project" @click="navigateAndCloseDrawer('/projects')">
          Projects
        </a-menu-item>
        <a-menu-item key="publications" @click="navigateAndCloseDrawer('/publications')">
          Publications
        </a-menu-item>
        <a-menu-item key="posts" @click="navigateAndCloseDrawer('/posts')">
          Posts
        </a-menu-item>
        <a-menu-item key="more" @click="navigateAndCloseDrawer('/more')">
          More
        </a-menu-item>
        <a-menu-item key="write" v-if="authStore.user"> <!-- New: Write Post link in drawer -->
          Write
        </a-menu-item>
        <a-menu-item key="chat" v-if="authStore.user"> <!-- New: Chat link in drawer -->
          Chat
        </a-menu-item>
      </a-menu>
      <!-- Commenting out auth-section-drawer to hide login/logout buttons -->
      <!-- <div class="auth-section-drawer">
        <a-button v-if="!authStore.user" type="primary" @click="showLogin; onCloseDrawer()">
          Login
        </a-button>
        <a-dropdown v-else>
          <a class="ant-dropdown-link" @click.prevent>
            Welcome, {{ authStore.user.username }}
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="logout" @click="handleLogout; onCloseDrawer()">
                Logout
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div> -->
    </a-drawer>

    <a-float-button
      :style="{ right: '24px', bottom: '24px', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }"
      @click="showChatModal"
    >
      <template #icon>
        <font-awesome-icon :icon="['fas', 'robot']" :style="{ fontSize: '30px', color: '#1890ff' }" />
      </template>
    </a-float-button>

    <a-modal
      v-model:open="isChatModalVisible"
      title="AI Chat"
      :footer="null"
      width="80%"
      @cancel="handleChatModalCancel"
    >
      <Chat />
    </a-modal>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #fff;
}

.logo {
  float: left;
  width: 64px; /* Increased size */
  height: 64px; /* Increased size */
  margin: 0px 24px 0px 0;
  overflow: hidden;
  border-radius: 0; /* Changed to square */
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 64px; /* Increased size to match container */
  height: 64px; /* Increased size to match container */
  object-fit: cover;
  border-radius: 0; /* Changed to square */
  background: transparent;
}

.main-content {
  flex: 1;
  padding: 64px 50px 0 50px; /* Added top padding to clear the fixed header */
  display: flex;
  flex-direction: column;
  margin-top: 0; /* Ensure no extra margin */
}

.content-container {
  flex: 1;
  background: #fff;
  padding: 24px;
  /* Remove margin: 0 auto; from here */
  min-height: calc(100vh - 64px - 70px - 32px);
}

/* Responsive adjustments */
@media (min-width: 1001px) {
  .content-container {
    max-width: 1200px; /* Set a wider max-width for desktop */
    margin: 0 auto; /* Center on desktop */
  }
}

@media (max-width: 768px) {
  .header {
    height: auto; /* Allow header height to be flexible on mobile */
    min-height: 64px; /* Ensure minimum height */
  }
  .main-content {
    /* Increased padding-top for mobile to ensure content clears header */
    padding: 70px 16px 0 16px; /* A slightly larger value to be safe */
  }
  .content-container {
    padding: 16px;
    max-width: 100%; /* Keep max-width 100% for mobile */
    margin: 0; /* Ensure no margin for full width on mobile */
  }
}

.header {
  background: #fff !important;
  border-bottom: 1px solid #f0f0f0;
  position: fixed; /* Ensure header stays at the top */
  width: 100%; /* Occupy full width */
  z-index: 1000; /* Ensure header is on top of other content */
  top: 0;
  left: 0;
  height: 64px; /* Ensure a fixed height for clarity */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.auth-section {
  margin-left: 20px;
}

.desktop-auth-section {
  display: flex;
}

.ant-dropdown-link {
  color: #1890ff;
}

.login-button {
  display: none;
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

.menu-icon {
  display: none; /* Hidden on desktop */
  font-size: 24px;
  cursor: pointer;
  margin-left: auto; /* Push to the right */
  color: rgba(0, 0, 0, 0.85);
}

/* Desktop specific styles */
@media (min-width: 769px) {
  .menu-icon {
    display: none; 
  }
  .main-menu,
  .desktop-auth-section {
    display: flex !important;
  }
}

/* Mobile specific styles */
@media (max-width: 768px) {
  .main-menu,
  .desktop-auth-section {
    display: none !important; /* Hide horizontal menu and auth on mobile */
  }

  .menu-icon {
    display: block;
  }

  .nav-container {
    justify-content: flex-end; /* Push hamburger to the right */
  }
}

.auth-section-drawer {
  margin-top: 24px;
  padding: 0 16px;
}

/* Custom styles to fix Ant Design float button icon clipping */
.ant-float-btn-icon {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: 100% !important;
  overflow: visible !important;
}
</style>

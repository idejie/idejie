<template>
  <div class="post-detail-container">
    <a-button type="link" @click="$router.back()" class="back-button">
      <ArrowLeftOutlined /> Back to Posts
    </a-button>
    <a-card v-if="post" class="post-card">
      <template #title>
        <h1 class="post-title">{{ post.title }}</h1>
      </template>
      <template #extra>
        <span class="post-meta">
          By {{ post.author }} on {{ post.date }}
        </span>
      </template>
      <div class="post-content" v-html="post.content"></div>
      <div class="post-tags">
        <a-tag v-for="tag in post.tags" :key="tag">{{ tag }}</a-tag>
      </div>
    </a-card>
    <a-empty v-else description="Post not found" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import postsData from '../data/posts';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const post = ref(null);

onMounted(() => {
  const postId = parseInt(route.params.id);
  post.value = postsData.find(p => p.id === postId);
});
</script>

<style scoped>
.post-detail-container {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.back-button {
  margin-bottom: 24px;
  font-size: 16px;
}

.post-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.85);
}

.post-meta {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
}

.post-content {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 16px;
}

.post-tags {
  margin-top: 24px;
}

.post-tags .ant-tag {
  margin-right: 8px;
  font-size: 14px;
  padding: 6px 12px;
}

@media (max-width: 768px) {
  .post-detail-container {
    padding: 16px;
  }

  .post-title {
    font-size: 24px;
  }

  .post-meta {
    font-size: 14px;
  }

  .post-content {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 20px;
  }

  .post-meta {
    font-size: 12px;
  }

  .post-tags .ant-tag {
    font-size: 12px;
    padding: 4px 8px;
  }
}
</style> 
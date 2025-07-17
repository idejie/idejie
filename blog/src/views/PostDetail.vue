<template>
  <div class="post-detail-container">
    <a-button type="link" @click="$router.back()" class="back-button">
      <ArrowLeftOutlined /> Back to Posts
    </a-button>
    <a-card v-if="post" class="post-card">
      <div class="post-detail-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <span class="post-meta">
          By {{ post.author }} on {{ post.date }}
        </span>
      </div>
      <div class="post-content" v-html="post.content"></div>
      <div class="post-tags">
        <a-tag v-for="tag in post.tags" :key="tag" :color="getTagColor(tag)">{{ tag }}</a-tag>
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

const tagColors = {
  'Vue': 'green',
  'Development': 'blue',
  'Frontend': 'cyan',
  'AI': 'purple',
  'Multi-Modal': 'red',
  'Research': 'orange',
  'Productivity': 'geekblue',
  'Tips': 'gold',
  'Welcome': 'lime', // New color for Welcome tag
  'First Post': 'volcano', // New color for First Post tag
};

const getTagColor = (tag) => {
  return tagColors[tag] || 'default';
};

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
  padding-top: 64px; /* Add padding to clear fixed header */
}

.back-button {
  margin-bottom: 24px;
  font-size: 16px;
}

.post-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 16px; /* Space between header and content */
}

.post-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.85);
  flex-basis: 100%; /* Occupy full width initially */
  order: 1; /* Title first */
}

.post-meta {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  flex-basis: 100%; /* Occupy full width initially */
  order: 2; /* Meta second */
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

/* Desktop specific styles for card header */
@media (min-width: 769px) {
  .post-detail-header {
    flex-wrap: nowrap;
    align-items: center;
  }

  .post-title {
    flex-basis: auto;
    order: unset;
    margin-right: 16px; /* Space between title and meta */
  }

  .post-meta {
    flex-basis: auto;
    order: unset;
  }
}

@media (max-width: 768px) {
  .post-detail-container {
    padding: 16px;
    padding-top: 64px; /* Ensure padding for mobile fixed header */
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
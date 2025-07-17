<template>
  <div class="blog-container">
    <h1 class="page-title">Posts</h1>
    <a-input-search
      v-model:value="searchQuery"
      placeholder="Search posts..."
      style="width: 300px; margin-bottom: 24px;"
      @search="handleSearch"
      :allowClear="true"
    />
    <div class="posts-list">
      <a-card v-for="post in filteredPosts" :key="post.id" class="post-card">
        <template #title>
          <h2 class="post-title">{{ post.title }}</h2>
        </template>
        <template #extra>
          <span class="post-meta">
            By {{ post.author }} on {{ post.date }}
          </span>
        </template>
        <div class="post-content" v-html="post.excerpt"></div>
        <router-link :to="`/posts/${post.id}`" class="read-more-link">Read More</router-link>
        <div class="post-tags">
          <a-tag v-for="tag in post.tags" :key="tag" :color="getTagColor(tag)">{{ tag }}</a-tag>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import posts from '../data/posts';
import { Input } from 'ant-design-vue'; // Import Input for a-input-search

const searchQuery = ref('');

const handleSearch = (value) => {
  searchQuery.value = value;
};

const tagColors = {
  'Vue': 'green',
  'Development': 'blue',
  'Frontend': 'cyan',
  'AI': 'purple',
  'Multi-Modal': 'red',
  'Research': 'orange',
  'Productivity': 'geekblue',
  'Tips': 'gold',
};

const getTagColor = (tag) => {
  return tagColors[tag] || 'default';
};

const filteredPosts = computed(() => {
  if (!searchQuery.value) {
    return posts;
  }
  const query = searchQuery.value.toLowerCase();
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(query);
    const excerptMatch = post.excerpt.toLowerCase().includes(query);
    const contentMatch = post.content.toLowerCase().includes(query);
    const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
    return titleMatch || excerptMatch || contentMatch || tagsMatch;
  });
});
</script>

<style scoped>
.blog-container {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.85);
}

.post-meta {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.75);
  margin-top: 16px;
}

.post-tags {
  margin-top: 16px;
}

.post-tags .ant-tag {
  margin-right: 8px;
  font-size: 14px;
  padding: 6px 12px;
}

.read-more-link {
  display: inline-block;
  margin-top: 8px;
  color: #1890ff;
  text-decoration: none;
}

.read-more-link:hover {
  text-decoration: underline;
}

.ant-input-search {
  margin-left: auto;
  margin-right: auto;
  display: block; /* Center the search bar */
}

@media (max-width: 768px) {
  .blog-container {
    padding: 16px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .post-title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 18px;
  }

  .post-meta {
    font-size: 12px;
  }

  .post-content {
    font-size: 14px;
  }
}
</style> 
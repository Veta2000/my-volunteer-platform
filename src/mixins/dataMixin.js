export const dataMixin = {
    data() {
      return {
        loading: false,
        error: null
      };
    },
    methods: {
      async fetchData(apiUrl) {
        this.loading = true;
        try {
          const response = await axios.get(apiUrl);
          return response.data;
        } catch (error) {
          this.error = 'Ошибка загрузки данных';
          console.error('Ошибка:', error);
        } finally {
          this.loading = false;
        }
      }
    }
  };
  
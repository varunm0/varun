angular.module('dashboardApp', [])
  .controller('DashboardController', function() {
    var vm = this;

    // Mock data for charts
    var monthlySalesData = [1200, 1900, 1600, 2000, 1800, 2200, 2500];
    var productDistributionData = {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{
        label: 'Distribution',
        data: [300, 450, 200, 350],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ]
      }]
    };

    // Initialize charts
    var monthlySalesChart = new Chart(document.getElementById('monthlySalesChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales',
          data: monthlySalesData,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      }
    });

    var productDistributionChart = new Chart(document.getElementById('productDistributionChart'), {
      type: 'pie',
      data: productDistributionData
    });
  });

angular.module('productCatalogApp', [])
    .controller('ProductCatalogController', function() {
        var catalog = this;

        catalog.categories = ['Electronics', 'Clothing', 'Books'];

        catalog.products = [
            { name: 'Laptop', category: 'Electronics', price: 100000 },
            { name: 'T-shirt', category: 'Clothing', price: 700 },
            { name: 'Mobile Phone', category: 'Electronics', price: 300000 },
            { name: 'Jeans', category: 'Clothing', price: 500 },
            { name: 'Book', category: 'Books', price: 1500 }
        ];

        catalog.selectedCategory = '';
    });

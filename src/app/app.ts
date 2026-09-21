import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  readonly brands = ['Samsung', 'iPhone', 'Oppo', 'Infinix', 'Vivo', 'Xiaomi'];
  readonly categories = [
    { label: 'All essentials', icon: '◈' },
    { label: 'Screens & glass', icon: '▣' },
    { label: 'Batteries', icon: '▰' },
    { label: 'Tools', icon: '⌁' },
    { label: 'Accessories', icon: '◌' }
  ];
  readonly products: Product[] = [
    {
      name: 'ProShield OLED Display',
      category: 'Screens & glass',
      price: '$48.00',
      tag: 'Best seller',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85'
    },
    {
      name: 'FlexCell Battery Pack',
      category: 'Batteries',
      price: '$16.50',
      tag: 'New arrival',
      image: 'https://images.unsplash.com/photo-1609592424854-70d8b3b7c9c7?auto=format&fit=crop&w=900&q=85'
    },
    {
      name: 'Magnetic Precision Kit',
      category: 'Tools',
      price: '$29.00',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85'
    },
    {
      name: 'ClearArmor Case',
      category: 'Accessories',
      price: '$9.90',
      image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85'
    }
  ];

  activeCategory = 'All essentials';
  searchTerm = '';
  cartCount = 0;
  menuOpen = false;
  notice = '';

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.products.filter((product) => {
      const matchesCategory = this.activeCategory === 'All essentials' || product.category === this.activeCategory;
      const matchesSearch = !term || `${product.name} ${product.category}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  addToCart(product: Product): void {
    this.cartCount += 1;
    this.notice = `${product.name} added to your kit`;
    window.setTimeout(() => this.notice = '', 2600);
  }

  scrollToProducts(): void {
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
  }
}

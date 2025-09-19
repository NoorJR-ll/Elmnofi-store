import { Injectable, signal, computed } from '@angular/core';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  quantity: number;
};

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();
  readonly count = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));
  readonly total = computed(() => this._items().reduce((sum, item) => sum + item.price * item.quantity, 0));

  addItem(item: Omit<CartItem, 'quantity'>): void {
    const items = this._items();
    const existingIndex = items.findIndex(i => i.id === item.id);
    if (existingIndex !== -1) {
      const updated = [...items];
      updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + 1 };
      this._items.set(updated);
    } else {
      this._items.set([...items, { ...item, quantity: 1 }]);
    }
  }

  removeItem(id: string): void {
    const items = this._items().filter(i => i.id !== id);
    this._items.set(items);
  }

  decrementItem(id: string): void {
    const items = this._items();
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return;
    const item = items[index];
    if (item.quantity <= 1) {
      this.removeItem(id);
    } else {
      const updated = [...items];
      updated[index] = { ...item, quantity: item.quantity - 1 };
      this._items.set(updated);
    }
  }

  clear(): void {
    this._items.set([]);
  }
}



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';
import Colors from '@/constants/colors';
import type { OneTimePurchase } from '@/constants/plans';

interface ProductCardProps {
  product: OneTimePurchase;
  onPurchase: (product: OneTimePurchase) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  const getCategoryColor = () => {
    switch (product.category) {
      case 'template':
        return '#4CAF50'; // Green
      case 'tool':
        return '#2196F3'; // Blue
      case 'report':
        return '#9C27B0'; // Purple
      default:
        return Colors.primary.main;
    }
  };

  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.categoryBadge, 
          { backgroundColor: getCategoryColor() }
        ]}
      >
        <Text style={styles.categoryText}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Text>
      </View>
      
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity 
          style={styles.purchaseButton}
          onPress={() => onPurchase(product)}
          activeOpacity={0.7}
        >
          <ShoppingCart size={16} color={Colors.neutral.white} style={styles.cartIcon} />
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
  },
  categoryText: {
    color: Colors.neutral.white,
    fontSize: 12,
    fontWeight: '600',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary.main,
  },
  purchaseButton: {
    backgroundColor: Colors.secondary.main,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  cartIcon: {
    marginRight: 6,
  },
  purchaseButtonText: {
    color: Colors.neutral.white,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProductCard;
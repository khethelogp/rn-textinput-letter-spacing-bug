import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React, { ReactNode } from 'react'

interface ListItemProps {
  title: string
  subtitle?: string
  description?: string
  leftElement?: ReactNode
  rightElement?: ReactNode
  onPress?: () => void
  badge?: string | number
  disabled?: boolean
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
  subtitleStyle?: TextStyle
  showChevron?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  description,
  leftElement,
  rightElement,
  onPress,
  badge,
  disabled = false,
  containerStyle,
  titleStyle,
  subtitleStyle,
  showChevron = false,
}) => {
  const Container = onPress ? TouchableOpacity : View

  return (
    <Container
      style={[styles.container, containerStyle, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {/* Left Element */}
      {leftElement && <View style={styles.leftElement}>{leftElement}</View>}

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
          {badge !== undefined && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>

        {subtitle && (
          <Text style={[styles.subtitle, subtitleStyle]} numberOfLines={1}>
            {subtitle}
          </Text>
        )}

        {description && (
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>

      {/* Right Element */}
      {(rightElement || showChevron) && (
        <View style={styles.rightElement}>
          {rightElement || (showChevron && <Text style={styles.chevron}>›</Text>)}
        </View>
      )}
    </Container>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
    minHeight: 60,
  },
  disabled: {
    opacity: 0.5,
  },
  leftElement: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  description: {
    fontSize: 13,
    color: '#999999',
    marginTop: 4,
    lineHeight: 18,
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  rightElement: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    fontSize: 28,
    color: '#C7C7CC',
    fontWeight: '300',
  },
})
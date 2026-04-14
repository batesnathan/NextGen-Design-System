import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '../../components/icons';
import type { IconSize } from '../../components/icons';

// Convenience aliases
const {
  ArrowForward,
  ArrowBack,
  ArrowDown,
  ArrowUp,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Add,
  Remove,
  Check,
  Edit,
  Trash,
  Upload,
  Download,
  Search,
  Home,
  Settings,
  Menu,
  More,
  Filter,
  Sort,
  Refresh,
  Reload,
  Warning,
  Info,
  Help,
  Notifications,
  User,
  Accounts,
  Mail,
  Chat,
  Phone,
  Money,
  PaymentCardIcon,
  Invest,
  AccountTimeline,
  Document,
  MedicalReport,
  Stroller,
  Parking,
  Tooth,
  Train,
  UserAlt,
  Ai,
  Pill,
  Receipt,
  ExternalLink,
  Duplicate,
  Save,
  Star,
  Clock,
  Calendar,
  Link,
  Lock,
  Unlock,
  IconComponent,
} = Icons;

// Alias for display
const Visibility = Icons.Visibility2;

const meta: Meta = {
  title: 'Design System/Icons/84 Icon Library',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// ============================================================================
// Individual Icon Stories
// ============================================================================

const IconShowcase = ({
  Icon,
  name,
}: {
  Icon: React.ComponentType<{ size: IconSize; className?: string }>;
  name: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '188px' }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Icon size="16" />
      <Icon size="20" />
      <Icon size="24" />
      <Icon size="32" />
      <Icon size="48" />
    </div>
    <small style={{ color: '#666', fontSize: '12px' }}>{name}</small>
  </div>
);

// All Icons Grid
export const AllIcons: StoryObj = {
  render: () => (
    <div style={{ padding: '32px', backgroundColor: '#f5f5f5', overflowY: 'auto', maxHeight: '100vh' }}>
      <h1 style={{ marginBottom: '12px' }}>Supported Figma Icon Library</h1>
      <p style={{ marginTop: 0, marginBottom: '32px', color: '#666', maxWidth: '880px' }}>
        This gallery only shows icons that are both present in the design system and included in the provided Figma icon set.
      </p>
      
      {/* Navigation & Direction */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Navigation & Direction</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={ArrowForward} name="arrow-forward" />
          <IconShowcase Icon={ArrowBack} name="arrow-back" />
          <IconShowcase Icon={ArrowDown} name="arrow-down" />
          <IconShowcase Icon={ArrowUp} name="arrow-up" />
          <IconShowcase Icon={ChevronRight} name="chevron-right" />
          <IconShowcase Icon={ChevronLeft} name="chevron-left" />
          <IconShowcase Icon={ChevronDown} name="chevron-down" />
          <IconShowcase Icon={ChevronUp} name="chevron-up" />
        </div>
      </section>

      {/* Action Icons */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Action Icons</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Add} name="add" />
          <IconShowcase Icon={Remove} name="remove" />
          <IconShowcase Icon={Check} name="check" />
          <IconShowcase Icon={Edit} name="edit" />
          <IconShowcase Icon={Trash} name="trash" />
          <IconShowcase Icon={Upload} name="upload" />
          <IconShowcase Icon={Download} name="download" />
          <IconShowcase Icon={Search} name="search" />
        </div>
      </section>

      {/* View & Content */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>View & Content</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Visibility} name="visibility" />
          <IconShowcase Icon={Home} name="home" />
          <IconShowcase Icon={Settings} name="settings" />
          <IconShowcase Icon={Menu} name="menu" />
          <IconShowcase Icon={More} name="more" />
          <IconShowcase Icon={Filter} name="filter" />
          <IconShowcase Icon={Sort} name="sort" />
          <IconShowcase Icon={Refresh} name="refresh" />
          <IconShowcase Icon={Reload} name="reload" />
        </div>
      </section>

      {/* Status & Alert */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Status & Alert</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Warning} name="warning" />
          <IconShowcase Icon={Info} name="info" />
          <IconShowcase Icon={Help} name="help" />
          <IconShowcase Icon={Notifications} name="notifications" />
        </div>
      </section>

      {/* User & Account */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>User & Account</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={User} name="user" />
          <IconShowcase Icon={UserAlt} name="user-alt" />
          <IconShowcase Icon={Accounts} name="accounts" />
        </div>
      </section>

      {/* Communication */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Communication</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Mail} name="mail" />
          <IconShowcase Icon={Chat} name="chat" />
          <IconShowcase Icon={Phone} name="phone" />
        </div>
      </section>

      {/* Financial */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Financial</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Money} name="money" />
          <IconShowcase Icon={Receipt} name="receipt" />
          <IconShowcase Icon={PaymentCardIcon} name="card" />
          <IconShowcase Icon={Invest} name="invest" />
          <IconShowcase Icon={AccountTimeline} name="account-timeline" />
        </div>
      </section>

      {/* Additional Icons */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Additional</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Document} name="document" />
          <IconShowcase Icon={MedicalReport} name="medical-report" />
          <IconShowcase Icon={Stroller} name="stroller" />
          <IconShowcase Icon={Parking} name="parking" />
          <IconShowcase Icon={Tooth} name="tooth" />
          <IconShowcase Icon={Train} name="train" />
          <IconShowcase Icon={Ai} name="ai" />
          <IconShowcase Icon={Pill} name="pill" />
          <IconShowcase Icon={ExternalLink} name="external-link" />
          <IconShowcase Icon={Duplicate} name="duplicate" />
          <IconShowcase Icon={Save} name="save" />
          <IconShowcase Icon={Star} name="star" />
          <IconShowcase Icon={Clock} name="clock" />
          <IconShowcase Icon={Calendar} name="calendar" />
          <IconShowcase Icon={Link} name="link" />
          <IconShowcase Icon={Lock} name="lock" />
          <IconShowcase Icon={Unlock} name="unlock" />
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#333' }}>Provided Figma Icons Not Yet In The Design System</h2>
        <p style={{ marginTop: 0, marginBottom: '16px', color: '#666', maxWidth: '880px' }}>
          These icons are in the provided Figma set but do not currently have a matching design-system component in this repository.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
          {[
            'camera',
            'clear',
            'learn',
            'visibility-off',
            'file',
            'photo',
            'invoice',
            'headset',
            'shield',
            'messages',
            'cancel',
            'send',
            'heart',
            'flag',
            'folder-open',
            'report',
            'rocket',
            'microphone',
            'shop',
            'paperclip',
            'done',
            'scan',
            'marketplace',
            'list',
            'grid',
            'coin',
          ].map((name) => (
            <div key={name} style={{ color: '#444', fontSize: '14px', fontFamily: 'monospace' }}>
              {name}
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: '64px', padding: '24px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h3>Icon Usage</h3>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', overflow: 'auto' }}>
{`import { Home, User, Settings } from '@/components/icons';

// Use with default size (24px)
<Home />

// Use with custom sizes (16, 20, 24, 32, 48)
<User size="32" />

// Use with custom className
<Settings className="text-blue-600" size="24" />

// Use dynamic icon component
<IconComponent name="home" size="24" />`}
        </pre>
      </div>
    </div>
  ),
};

// Size Variants Story
export const SizeVariants: StoryObj = {
  render: () => (
    <div style={{ padding: '32px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ marginBottom: '32px' }}>Icon Size Variants</h1>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        {(['16', '20', '24', '32', '48'] as const).map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <h3>{size}px</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
              <Home size={size} />
              <User size={size} />
              <Settings size={size} />
              <ArrowForward size={size} />
              <Check size={size} />
              <Search size={size} />
              <Notifications size={size} />
              <Star size={size} />
              <Money size={size} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

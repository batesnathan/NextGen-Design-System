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
  Close,
  Check,
  Edit,
  Delete,
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
  Error,
  Info,
  Success,
  Help,
  Notifications,
  Bell,
  User,
  Profile,
  Accounts,
  Logout,
  Login,
  Mail,
  Chat,
  Message,
  Phone,
  SendEmail,
  Money,
  Wallet,
  PaymentCardIcon,
  Invest,
  Transaction,
  AccountTimeline,
  Document,
  FileUpload,
  Share,
  Print,
  Save,
  Favorite,
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
      <h1 style={{ marginBottom: '32px' }}>84 NextGen Icons Library</h1>
      
      {/* Navigation & Direction */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Navigation & Direction (8)</h2>
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
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Action Icons (9+)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Add} name="add" />
          <IconShowcase Icon={Remove} name="remove" />
          <IconShowcase Icon={Close} name="close" />
          <IconShowcase Icon={Check} name="check" />
          <IconShowcase Icon={Edit} name="edit" />
          <IconShowcase Icon={Delete} name="trash (delete)" />
          <IconShowcase Icon={Upload} name="upload" />
          <IconShowcase Icon={Download} name="download" />
          <IconShowcase Icon={Search} name="search" />
        </div>
      </section>

      {/* View & Content */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>View & Content (10)</h2>
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
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Status & Alert (7)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Warning} name="warning" />
          <IconShowcase Icon={Error} name="error" />
          <IconShowcase Icon={Info} name="info" />
          <IconShowcase Icon={Success} name="success" />
          <IconShowcase Icon={Help} name="help" />
          <IconShowcase Icon={Notifications} name="notifications" />
          <IconShowcase Icon={Bell} name="bell" />
        </div>
      </section>

      {/* User & Account */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>User & Account (5)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={User} name="user" />
          <IconShowcase Icon={Profile} name="profile" />
          <IconShowcase Icon={Accounts} name="accounts" />
          <IconShowcase Icon={Logout} name="logout" />
          <IconShowcase Icon={Login} name="login" />
        </div>
      </section>

      {/* Communication */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Communication (5)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Mail} name="mail" />
          <IconShowcase Icon={Chat} name="chat" />
          <IconShowcase Icon={Message} name="message" />
          <IconShowcase Icon={Phone} name="phone" />
          <IconShowcase Icon={SendEmail} name="send-email" />
        </div>
      </section>

      {/* Financial */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Financial (6)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Money} name="money" />
          <IconShowcase Icon={Wallet} name="wallet" />
          <IconShowcase Icon={PaymentCardIcon} name="card" />
          <IconShowcase Icon={Invest} name="invest" />
          <IconShowcase Icon={Transaction} name="transaction" />
          <IconShowcase Icon={AccountTimeline} name="account-timeline" />
        </div>
      </section>

      {/* Additional Icons */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px', color: '#333' }}>Additional (14+)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <IconShowcase Icon={Document} name="document" />
          <IconShowcase Icon={FileUpload} name="file-upload" />
          <IconShowcase Icon={Share} name="share" />
          <IconShowcase Icon={Print} name="print" />
          <IconShowcase Icon={Save} name="save" />
          <IconShowcase Icon={Favorite} name="favorite" />
          <IconShowcase Icon={Star} name="star" />
          <IconShowcase Icon={Clock} name="clock" />
          <IconShowcase Icon={Calendar} name="calendar" />
          <IconShowcase Icon={Link} name="link" />
          <IconShowcase Icon={Lock} name="lock" />
          <IconShowcase Icon={Unlock} name="unlock" />
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
              <Bell size={size} />
              <Star size={size} />
              <Wallet size={size} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

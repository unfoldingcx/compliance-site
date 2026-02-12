import {
  FileText,
  UserCheck,
  Key,
  Activity,
  Lock,
  Cog,
  Radio,
  AlertTriangle,
  Briefcase,
  Layout,
  HardDrive,
  Clock,
  Shield,
  FileCheck,
  Cloud,
  Code,
  Layers,
  Server,
  KeyRound,
} from 'lucide-react';

// Icon array mapped by index to categories from compliance data.
// The order here must match the order categories appear in the translation JSON files.
export const categoryIcons = [
  FileText,      // General and PSSI
  UserCheck,     // User awareness and training
  Key,           // Access Authorization Management
  Activity,      // Monitoring and Traceability
  Lock,          // Physical security
  Cog,           // Security related to operations
  Radio,         // Security of communications
  AlertTriangle, // Incident Management
  Briefcase,     // Subcontracting Security
  Layout,        // Project Information Systems
  HardDrive,     // Backups Management
  Clock,         // Business Continuity
  Shield,        // Data Security
  FileCheck,     // Compliance
  Cloud,         // Hosting
  Code,          // Software
  Layers,        // Services and layers
  Server,        // Hypervisor & OS
  KeyRound,      // Authentication
];

// components/ui/Notification.tsx
"use client";

import { Bell } from 'lucide-react'; // Import a bell icon for notifications
import styles from './Notification.css'; // Import the CSS file

const Notification: React.FC = () => {
    return (
        <button className={styles.notificationButton}>
            <Bell className={styles.bellIcon} />
            {/* Example badge for notification count */}
            <div className={styles.badge}>3</div>
        </button>
    );
};

export default Notification;

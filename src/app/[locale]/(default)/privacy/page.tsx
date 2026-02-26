import React from 'react'
import PageTopBanner from '@/components/common/PageTopBanner'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "We respect your privacy and are committed to protecting your personal data.",
};
function page() {

    return (
        <>
            <PageTopBanner
                title="Privacy Policy"
                description="We respect your privacy and are committed to protecting your personal data."
            />
            <div className='container mx-auto text-black' dangerouslySetInnerHTML={{
                __html: `
                <h1>🔒 Privacy Policy: OUR CR</h1>

    <div class="meta-info">
        <p><strong>Effective Date:</strong> January 2025</p>
        <p><strong>Last Updated:</strong> January 2025</p>
    </div>

    <p>At <strong>OUR CR</strong>, we care deeply about your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. By accessing or using OUR CR, you agree to the terms outlined below.</p>

    <section>
        <h2>🧾 1. Information We Collect</h2>
        <p>We may collect the following information from users:</p>
        <ul>
            <li><strong>Personal Information:</strong> Name, email address, and password (provided by CR or user).</li>
            <li><strong>Usage Data:</strong> Information about how you use the platform (logins, class details, issue submissions, etc.).</li>
            <li><strong>Communication Data:</strong> Messages, notices, and announcements shared within the platform.</li>
        </ul>
    </section>

    <section>
        <h2>🔐 2. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul>
            <li>Manage your account and provide access to OUR CR features.</li>
            <li>Allow CRs to communicate with students effectively.</li>
            <li>Improve user experience and fix technical issues.</li>
            <li>Send important updates or announcements related to your account.</li>
        </ul>
    </section>

    <section>
        <h2>🧠 3. Data Security</h2>
        <p>We take data security seriously. All stored information is protected using <strong>secure encryption</strong> and server-side authentication methods. Only authorized users (Class Representatives and platform administrators) can access relevant data.</p>
    </section>

    <section>
        <h2>🧩 4. Data Sharing and Disclosure</h2>
        <p>We do not sell, trade, or share your personal information with third parties. Your data is used exclusively within OUR CR for class management. We may share limited information only if required by law or for essential system maintenance.</p>
    </section>

    <section>
        <h2>🧭 5. User Responsibilities</h2>
        <ul>
            <li>Keeping login information confidential.</li>
            <li>Using the platform ethically and respectfully.</li>
            <li>Reporting any unauthorized access or suspicious activity.</li>
        </ul>
    </section>

    <section>
        <h2>💬 6. Cookies and Tracking</h2>
        <p>OUR CR may use cookies to enhance user experience and store preferences. You can disable cookies in your browser settings, but some features may not function properly.</p>
    </section>

    <section>
        <h2>🧾 7. Data Retention</h2>
        <p>We retain user data only as long as necessary for educational and administrative purposes. When no longer needed, information is safely deleted or anonymized.</p>
    </section>

    <section>
        <h2>⚖️ 8. Your Rights</h2>
        <p>You have the right to access your personal information, request corrections or deletion, and withdraw consent for data usage where applicable.</p>
    </section>

    <section>
        <h2>📩 9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <table>
            <tr>
                <td><strong>Email</strong></td>
                <td>support@ourcr.com</td>
            </tr>
            <tr>
                <td><strong>Phone</strong></td>
                <td>+880 1700-000000</td>
            </tr>
        </table>
    </section>

    <section>
        <h2>🔄 10. Policy Updates</h2>
        <p>We may update this Privacy Policy from time to time. All changes will be posted on this page with a new “Last Updated” date.</p>
    </section>

    <div class="footer">
        <p>© 2025 OUR CR. All Rights Reserved.</p>
        <p><em>Your trust matters. We’re committed to keeping your data safe.</em></p>
    </div>
                `}} />
        </>
    )
}

export default page
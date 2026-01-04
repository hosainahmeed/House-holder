import React from 'react'
import PageTopBanner from '@/components/common/PageTopBanner'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Clear guidelines to ensure fairness, transparency, and security for all.",
};
function page() {

    return (
        <>
            <PageTopBanner
                title="Terms & Conditions"
                description="Clear guidelines to ensure fairness, transparency, and security for all."
            />
            <div className='container mx-auto text-black' dangerouslySetInnerHTML={{
                __html: `<h1>📜 Terms and Conditions: OUR CR</h1>

    <div class="meta-info">
        <p><strong>Effective Date:</strong> January 2025</p>
        <p><strong>Last Updated:</strong> January 2025</p>
    </div>

    <p>Welcome to <strong>OUR CR</strong>. These Terms and Conditions govern your use of our platform. By accessing or using OUR CR, you agree to be bound by these terms. If you do not agree, please refrain from using the platform.</p>

    <section>
        <h2>✅ 1. Acceptance of Terms</h2>
        <p>By creating an account or logging into OUR CR, you confirm that you are a student or an authorized Class Representative (CR) of your institution and that you will comply with all local laws and institutional regulations.</p>
    </section>

    <section>
        <h2>🔑 2. User Accounts</h2>
        <p>To use our services, you must have a valid account. You are responsible for:</p>
        <ul>
            <li>Providing accurate and complete information during registration.</li>
            <li>Maintaining the security of your password and login credentials.</li>
            <li>All activities that occur under your account.</li>
        </ul>
        <p><span class="highlight">Note:</span> Sharing your account with unauthorized individuals is strictly prohibited.</p>
    </section>

    <section>
        <h2>📢 3. Acceptable Use</h2>
        <p>OUR CR is designed for educational coordination. Users agree <strong>NOT</strong> to:</p>
        <ul>
            <li>Post or share content that is offensive, defamatory, or discriminatory.</li>
            <li>Spam the platform with irrelevant advertisements or links.</li>
            <li>Attempt to bypass security features or hack into other users' data.</li>
            <li>Impersonate other students, CRs, or faculty members.</li>
        </ul>
    </section>

    <section>
        <h2>🛠️ 4. Role of Class Representatives (CRs)</h2>
        <p>CRs have administrative privileges to manage class schedules and notices. CRs agree to use these tools responsibly, ensuring that all shared information is accurate and beneficial to the student body.</p>
    </section>

    <section>
        <h2>🚫 5. Limitation of Liability</h2>
        <p>OUR CR is provided "as is" without any warranties. While we strive for 100% uptime and accuracy, we are not liable for:</p>
        <ul>
            <li>Missed deadlines due to system delays.</li>
            <li>Errors in notices posted by third parties (users/CRs).</li>
            <li>Loss of data due to technical failures beyond our control.</li>
        </ul>
    </section>

    <section>
        <h2>⚠️ 6. Termination of Access</h2>
        <p>We reserve the right to suspend or terminate your access to the platform without notice if we believe you have violated these Terms and Conditions or engaged in behavior that harms the OUR CR community.</p>
    </section>

    <section>
        <h2>🎨 7. Intellectual Property</h2>
        <p>All logos, designs, and software code on OUR CR are the property of the platform developers. Users may not copy, modify, or distribute any part of the platform without written permission.</p>
    </section>

    <section>
        <h2>📩 8. Contact Information</h2>
        <p>For questions regarding these Terms, please reach out to our legal team:</p>
        <table>
            <tr>
                <td><strong>Email</strong></td>
                <td>legal@ourcr.com</td>
            </tr>
            <tr>
                <td><strong>Phone</strong></td>
                <td>+880 1700-000000</td>
            </tr>
        </table>
    </section>

    <section>
        <h2>🔄 9. Changes to Terms</h2>
        <p>We may modify these Terms at any time. Significant changes will be notified via the platform. Your continued use of the platform after changes are posted constitutes your acceptance of the new Terms.</p>
    </section>

    <div class="footer">
        <p>© 2025 OUR CR. All Rights Reserved.</p>
        <p><em>Building a better classroom experience together.</em></p>
    </div>`}} />
        </>
    )
}

export default page
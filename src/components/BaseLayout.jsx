import {clsx} from 'clsx';
import { dir } from 'i18next';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';

const inter = Inter({subsets: ['latin']});

export default async function BaseLayout({children, locale}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={ dir(locale) }>
      <body>
        <div className="main-page-wrapper" suppressHydrationWarning={true}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

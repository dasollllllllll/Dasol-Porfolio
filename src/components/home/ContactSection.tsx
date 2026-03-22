"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedText>
          <p className="text-sm text-teal-accent tracking-widest mb-6">
            Thank you for reviewing my portfolio
          </p>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="text-2xl font-light leading-relaxed md:text-3xl">
            사용자가 복잡한 시스템을 직관적으로{" "}
            <span className="text-teal-accent">이해</span>하고
            <br />
            자연스럽게 <span className="text-teal-accent">행동</span>할 수 있도록{" "}
            <span className="text-teal-accent">UX 구조를 설계</span>합니다
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-text-secondary">
              Name <span className="ml-2 text-text-primary">박다솔</span>
            </p>
            {/* TODO: 실제 이메일 주소로 교체 필요 */}
            <a
              href="mailto:contact@example.com"
              className="text-teal-accent hover:underline transition-colors"
            >
              contact@example.com
            </a>
            {/* TODO: 링크드인 URL 추가 필요 */}
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}

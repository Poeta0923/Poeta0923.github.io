"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-1 tracking-wider">01. About</p>
          <h2 className="text-3xl font-bold text-foreground mb-10">소개</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* 자기소개 */}
            <div className="md:col-span-3 space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                {personalInfo.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                복잡한 문제를 단순하고 우아하게 해결하는 것을 목표로 하며, 사용자 경험을 항상 염두에 두고 개발합니다.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {personalInfo.interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-primary/30 text-primary/80 bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 학력 카드 */}
            <div className="md:col-span-2">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-sm font-semibold text-foreground">학력</h3>
                  <Separator className="bg-border/50" />
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <div className="space-y-0.5">
                      <p className="font-medium text-foreground">{personalInfo.university}</p>
                      <p className="text-sm text-muted-foreground">{personalInfo.department}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        {personalInfo.enrollYear}년 입학
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

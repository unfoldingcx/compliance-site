import { ComplianceItem as ComplianceItemType } from "@/store/complianceStore";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ComplianceItemProps {
  item: ComplianceItemType;
  index: number;
}

export function ComplianceItem({ item, index }: ComplianceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border rounded-lg my-3 shadow-sm bg-card hover:shadow-md transition-all"
      >
        <AccordionTrigger className="px-4 py-4 hover:no-underline">
          <div className="flex flex-col items-start text-left gap-2">
            <Badge variant="outline" className="capitalize font-medium">
              {item.category}
            </Badge>
            <h3 className="font-medium text-base md:text-lg">
              {item.question}
            </h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-5 pt-2 text-muted-foreground leading-relaxed">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

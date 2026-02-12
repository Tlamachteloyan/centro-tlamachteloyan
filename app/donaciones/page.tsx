export const dynamic = "force-dynamic";

import { Suspense } from "react";
import DonacionesContent from "./DonacionesContent";

export default function DonacionesPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <DonacionesContent />
    </Suspense>
  );
}

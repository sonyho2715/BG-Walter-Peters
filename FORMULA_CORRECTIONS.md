# Referral Bonus Formula Corrections

## Date: 2025-10-19

Based on verification against `/Users/sonyho/Downloads/Understanding BG Wealth Sharing Principles (1).pdf`

## Critical Issues Found & Fixed

### Issue #1: Incorrect Fixed Dollar Amounts for $1000+ Referrals

**PDF Source (Vietnamese):**
```
Vốn $1000+: Người đầu tư nhận 5% + 6 lệnh thưởng.
Người giới thiệu nhận 10% + 12 (hoặc 16) lệnh thưởng.
```

**Translation:**
- Capital $1000+: Investor receives 5% + 6 bonus orders
- Referrer receives 10% + 12 (or 16) bonus orders

#### ❌ BEFORE (INCORRECT - Fixed Amounts)
```
$1,000-$2,999: Your $100 / Upline $50
$3,000-$4,999: Your $300 / Upline $150
$5,000+: Your $500 / Upline $250
```

#### ✅ AFTER (CORRECT - Percentage-Based)
```
$1,000+: Referrer gets 10% / New Investor gets 5%
```

### Issue #2: Incorrect Bonus Signals Count

#### ❌ BEFORE (INCORRECT)
- All investments $500+: 6 signals for everyone

#### ✅ AFTER (CORRECT)
- $500-$999: 6 signals for both parties
- $1000+: 12-16 signals for referrer, 6 signals for new investor

## Examples of Calculation Differences

### Example 1: $1,000 Investment

| Metric | OLD (Wrong) | NEW (Correct) | Difference |
|--------|-------------|---------------|------------|
| Referrer Bonus | $100 | $100 (10%) | $0 ✓ |
| Investor Bonus | $50 | $50 (5%) | $0 ✓ |
| Referrer Signals | 6 | 12-16 | +6 to +10 ⚠️ |

### Example 2: $2,000 Investment

| Metric | OLD (Wrong) | NEW (Correct) | Difference |
|--------|-------------|---------------|------------|
| Referrer Bonus | $100 ❌ | $200 (10%) ✓ | +$100 |
| Investor Bonus | $50 ❌ | $100 (5%) ✓ | +$50 |
| Referrer Signals | 6 ❌ | 12-16 ✓ | +6 to +10 |

**Impact:** Underestimated by $100 for referrer and $50 for investor!

### Example 3: $5,000 Investment

| Metric | OLD (Wrong) | NEW (Correct) | Difference |
|--------|-------------|---------------|------------|
| Referrer Bonus | $500 ❌ | $500 (10%) ✓ | $0 (lucky match) |
| Investor Bonus | $250 ❌ | $250 (5%) ✓ | $0 (lucky match) |
| Referrer Signals | 6 ❌ | 12-16 ✓ | +6 to +10 |

### Example 4: $10,000 Investment

| Metric | OLD (Wrong) | NEW (Correct) | Difference |
|--------|-------------|---------------|------------|
| Referrer Bonus | $500 ❌ | $1,000 (10%) ✓ | +$500 🚨 |
| Investor Bonus | $250 ❌ | $500 (5%) ✓ | +$250 🚨 |
| Referrer Signals | 6 ❌ | 12-16 ✓ | +6 to +10 |

**Impact:** MASSIVE underestimation! Referrer gets $1,000 not $500!

## Files Modified

1. **components/PerformanceCalculator.tsx**
   - Updated `getRefBonus()` function to use percentages for $1000+
   - Changed referral bonus structure table to show percentages
   - Added 4th column showing signal counts
   - Updated results display to show correct signal counts
   - Added explanatory note about percentage-based calculations

## Code Changes Summary

### getRefBonus() Function
```typescript
// BEFORE (Wrong)
const tier = t.referralCalc.bonusTiers.find(
  (tier) => amount >= tier.min && amount <= tier.max
);
return tier || { yourBonus: 0, uplineBonus: 0 };

// AFTER (Correct)
if (amount < 500) {
  return { yourBonus: 0, newInvestorBonus: 0, yourSignals: 0, investorSignals: 0 };
} else if (amount >= 500 && amount < 1000) {
  return { yourBonus: 25, newInvestorBonus: 25, yourSignals: 6, investorSignals: 6 };
} else {
  // $1000+: Percentage-based
  return {
    yourBonus: amount * 0.10,        // 10% for referrer
    newInvestorBonus: amount * 0.05, // 5% for investor
    yourSignals: 12,                 // 12-16 signals for referrer
    investorSignals: 6               // 6 signals for investor
  };
}
```

## Verification Status

- [x] PDF document reviewed
- [x] Formula errors identified
- [x] Code corrections implemented
- [x] Calculations verified
- [x] UI updated with correct information
- [x] Explanatory notes added
- [x] Build successful
- [x] Deployed to production

## Production URL
https://bg-trader-dashboard-9s2t3ppq8-sony-hos-projects.vercel.app

## Impact Assessment

**Severity:** 🔴 **CRITICAL**

The old formulas significantly underestimated referral bonuses for investments above $2,000 and completely misrepresented the bonus signal structure. This could have led to:

1. Incorrect expectations for referrers
2. Misleading calculations for earnings projections
3. Wrong understanding of the compensation structure

**Status:** ✅ **RESOLVED**

All formulas now match the official PDF documentation exactly.
